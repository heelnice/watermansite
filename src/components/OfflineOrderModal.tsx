import { useState, useCallback } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.ts";
import "./OfflineOrderModal.css";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Props = {
  open: boolean;
  onClose: () => void;
};

export function OfflineOrderModal({ open, onClose }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<string | null>(null);

  const validateEmail = useCallback((value: string): boolean => {
    if (!value.trim()) {
      setEmailError("E-mail is verplicht.");
      return false;
    }
    if (!EMAIL_REGEX.test(value.trim())) {
      setEmailError("Voer een geldig e-mailadres in.");
      return false;
    }
    setEmailError("");
    return true;
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validateEmail(email)) return;

    const qty = Math.min(10, Math.max(1, quantity));
    setLoading(true);
    const SUBMIT_TIMEOUT_MS = 15000;

    try {
      const writePromise = addDoc(collection(db, "offlineOrders"), {
        createdAt: serverTimestamp(),
        status: "new",
        product: "waterman-paperback",
        delivery: "no_shipping",
        price: 13,
        name: name.trim() || null,
        email: email.trim(),
        quantity: qty,
        note: note.trim() || null,
      });
      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("Verzoek duurde te lang. Controleer je verbinding en Firebase-instellingen.")), SUBMIT_TIMEOUT_MS)
      );
      const docRef = await Promise.race([writePromise, timeoutPromise]);
      setOrderId(docRef.id);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Bestelling kon niet worden opgeslagen.";
      setSubmitError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOrderId(null);
    setSubmitError(null);
    setEmailError("");
    setName("");
    setEmail("");
    setQuantity(1);
    setNote("");
    onClose();
  };

  if (!open) return null;

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Bestel zonder verzending</h2>
          <button type="button" className="modal-close" onClick={handleClose} aria-label="Sluiten">
            ×
          </button>
        </div>

        {orderId ? (
          <div className="modal-success">
            <p className="modal-success-title">Super! Bestelling ontvangen</p>
            <p className="modal-success-note">Ik neem zo snel mogelijk contact met je op via de mail</p>
            <p className="modal-success-ref">
              Referentienummer: <span>{orderId}</span>
            </p>
            <div className="modal-actions">
              <button type="button" className="cta-button primary" onClick={handleClose}>
                Sluiten
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="offline-name">Naam (optioneel)</label>
              <input
                id="offline-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Je naam"
              />
            </div>
            <div className="form-row">
              <label htmlFor="offline-email">E-mail (verplicht)</label>
              <input
                id="offline-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) validateEmail(e.target.value);
                }}
                onBlur={() => validateEmail(email)}
                placeholder="je@voorbeeld.nl"
                required
                aria-invalid={!!emailError}
                aria-describedby={emailError ? "offline-email-error" : undefined}
              />
              {emailError && (
                <p id="offline-email-error" className="form-error" role="alert">
                  {emailError}
                </p>
              )}
            </div>
            <div className="form-row">
              <label htmlFor="offline-quantity">Aantal</label>
              <input
                id="offline-quantity"
                type="number"
                min={1}
                max={10}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value) || 1)}
              />
            </div>
            <div className="form-row">
              <label htmlFor="offline-note">Opmerking (optioneel)</label>
              <textarea
                id="offline-note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Eventuele opmerkingen"
                rows={3}
              />
            </div>
            {submitError && (
              <p className="form-error form-error-block" role="alert">
                {submitError}
              </p>
            )}
            <div className="modal-actions">
              <button type="button" className="cta-button" onClick={handleClose}>
                Annuleren
              </button>
              <button type="submit" className="cta-button primary" disabled={loading}>
                {loading ? "Bezig…" : "Versturen"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
