import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const UploadPage = () => {
  const [formData, setFormData] = useState({
    bank: "",
    fullName: "",
    email: "",
    phone: "",
    file: null,
  });

  const [uploadMessage, setUploadMessage] = useState("");

  // עדכון הנתונים בטופס
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // עדכון הקובץ שנבחר
  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  // שליחת הטופס
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.file) {
        setUploadMessage("יש להעלות מסמך קודם!");
        return;
      }

      const data = new FormData();
      data.append("bank", formData.bank);
      data.append("fullName", formData.fullName);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("file", formData.file);
    //   http://ec2-13-61-177-219.eu-north-1.compute.amazonaws.com:8000/api_test
    // http://localhost:8000

    // ,
    // referrerPolicy: "unsafe-url" 

    try {
        const response = await fetch("https://ec2-13-61-177-219.eu-north-1.compute.amazonaws.com/api_test/", {
          method: "POST",
          body: data
        });

  
        if (response.ok) {
            setUploadMessage("הקובץ נשלח בהצלחה! נחזור אליך תוך יום עסקים.");
            setFormData({ bank: "", fullName: "", email: "", phone: "", file: null });
        } else {
            setUploadMessage(response.statusText + "אירעה שגיאה בשליחת הקובץ. אנא נסה שוב.");
            setUploadMessage(await response.text());
        }
      } catch (err) {
        console.error(err);
        setUploadMessage(err.message || String(err));
        // setUploadMessage( err+ "אירעה שגיאה בשליחת הקובץ. אנא נסה שוב.");
        
      }









    
    

    
  };

  return (
    <Container>
      <h2>שליחת דוח יתרות לסילוק</h2>
      <Description>
        <p>
          <strong>מהו דוח יתרות לסילוק?</strong>  
          זהו מסמך רשמי מהבנק שמציג את יתרת המשכנתא שלכם, כולל סכום הקרן, יתרת הריבית, והתחייבויות נוספות.  
          המסמך חיוני לבדיקת אפשרות לשיפור תנאי המשכנתא שלכם.
        </p>
        <p>
          לא יודעים איך להוריד את הדוח?  
          <Link to="/how-to-download" target="_blank">לחצו כאן למדריך המלא</Link>.
        </p>
        <p><strong>חשוב לדעת:</strong>  
          השירות ניתן **ללא עלות**, ונחזור אליכם עם תוצאות הבדיקה תוך **יום עסקים אחד**.
        </p>
      </Description>

      <Form onSubmit={handleSubmit}>
        <Label>בחר בנק:</Label>
        <Select name="bank" value={formData.bank} onChange={handleChange} required>
          <option value="">בחר בנק</option>
          <option value="הפועלים">הפועלים</option>
          <option value="לאומי">לאומי</option>
          <option value="מזרחי">מזרחי</option>
          <option value="דיסקונט">דיסקונט</option>
          <option value="בינלאומי">בינלאומי</option>
          <option value="אוצר החייל">אוצר החייל</option>
          <option value="מסד">מסד</option>
          <option value="חוץ בנקאי">חוץ בנקאי</option>
          <option value="אחר">אחר</option>
        </Select>

        <Label>שם מלא:</Label>
        <Input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

        <Label>אימייל:</Label>
        <Input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <Label>טלפון:</Label>
        <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <Label>העלה מסמך (PDF בלבד):</Label>
        <Input type="file" accept=".pdf" onChange={handleFileChange} required />

        <Button type="submit">שלח</Button>
      </Form>

      {uploadMessage && <Message>{uploadMessage}</Message>}
    </Container>
  );
};

// 🎨 עיצוב
const Container = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Description = styled.div`
  background: #eef3fa;
  padding: 15px;
  border-radius: 8px;
  text-align: right;
  font-size: 1rem;
  margin-bottom: 20px;
  line-height: 1.6;

  a {
    color: #007bff;
    text-decoration: underline;
    font-weight: bold;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  text-align: right;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const Message = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #28a745;
  margin-top: 10px;
`;

export default UploadPage;
