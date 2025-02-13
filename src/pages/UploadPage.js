import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
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
  const [isLoading, setIsLoading] = useState(false); // מצב טעינה

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

    // הפעלת מצב טעינה
    setIsLoading(true);
    setUploadMessage("");

    const data = new FormData();
    data.append("bank", formData.bank);
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("file", formData.file);

    try {
      const response = await fetch("https://mashkanta-me.com/api_test/", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setUploadMessage("הקובץ נשלח בהצלחה! נחזור אליך תוך יום עסקים.");
        setFormData({
          bank: "",
          fullName: "",
          email: "",
          phone: "",
          file: null,
        });
      } else {
        setUploadMessage("אירעה שגיאה בשליחת הקובץ. אנא נסה שוב.");
      }
    } catch (err) {
      console.error(err);
      setUploadMessage("אירעה שגיאה בשליחת הקובץ. אנא נסה שוב.");
    } finally {
      // הפסקת מצב טעינה
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <h2>שליחת דוח יתרות לסילוק</h2>
      <Description>
        <p>
          <strong>מהו דוח יתרות לסילוק?</strong>  
          </p>
        <p>
          זהו מסמך רשמי מהבנק שמציג את יתרת המשכנתא שלכם, כולל סכום הקרן, יתרת הריבית, והתחייבויות נוספות.  
          המסמך חיוני לבדיקת אפשרות לשיפור תנאי המשכנתא שלכם.
        </p>
        <p>
          לא יודעים איך להוריד את הדוח?  
          <Link to="/how-to-download" target="_blank">לחצו כאן למדריך המלא</Link>.
        </p>
        <p>
          <strong >חשוב לדעת: </strong>   
            השירות ניתן  <strong>ללא עלות</strong>, ונחזור אליכם עם תוצאות הבדיקה תוך <strong>יום עסקים אחד</strong>.
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
        <Input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <Label>אימייל:</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Label>טלפון:</Label>
        <Input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <Label>העלה מסמך (PDF בלבד):</Label>
        <Input type="file" accept=".pdf" onChange={handleFileChange} required />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? "שולח..." : "שלח"}
        </Button>

        {/* ספינר יופיע כאשר isLoading = true */}
        {isLoading && (
          <SpinnerWrapper>
            <LoadingSpinner />
            <SpinnerText>אנא ממתין...</SpinnerText>
          </SpinnerWrapper>
        )}
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

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

// הודעה מתחת לטופס
const Message = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #28a745;
  margin-top: 10px;
`;

/* ספינר */
const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -5px; /* אפשר לשחק עם זה כדי לקרב את הספינר לטקסט */
`;

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.div`
  width: 25px;
  height: 25px;
  border: 4px solid #999;
  border-top-color: #007bff;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;

const SpinnerText = styled.span`
  margin-right: 8px;
  font-size: 0.9rem;
  color: #555;
`;
export default UploadPage; // <-- חשוב!
