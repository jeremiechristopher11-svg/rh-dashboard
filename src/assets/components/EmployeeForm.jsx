import { useState } from "react";
import { styles } from "./styles";

function EmployeeForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    department: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.name || !formData.position || !formData.department) return;
    onAdd({ ...formData, status: "actif" });
    setFormData({ name: "", position: "", department: "" });
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.formTitle}>➕ Ajouter un employé</h2>
      <div style={styles.formGrid}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Nom complet</label>
          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Ex : Sophie Martin"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Poste</label>
          <input
            style={styles.input}
            type="text"
            name="position"
            placeholder="Ex : Développeur Backend"
            value={formData.position}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Département</label>
          <select
            style={styles.input}
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">-- Choisir --</option>
            <option value="Tech">Tech</option>
            <option value="Produit">Produit</option>
            <option value="RH">RH</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
            <option value="programmeur">programmeur</option>
            <option value="professeur">professeur</option>
          </select>
        </div>
      </div>
      <button type="submit" style={styles.submitBtn}>
        Ajouter l'employé
      </button>
    </form>
  );
}

export default EmployeeForm;
