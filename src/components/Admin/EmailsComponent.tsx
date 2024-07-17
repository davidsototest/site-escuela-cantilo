// EmailsComponent.tsx
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { db } from "../../firebase/firebase";
import { ToastiSuccess } from "../toasti/ToastiSuccess";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useAuth } from "../../context/AuthContext";

interface Email {
  id: string;
  email: string;
}

const EmailsComponent: React.FC = () => {
  const [emails, setEmails] = useState<Email[]>([]);
  const { logout } = useAuth();

  useEffect(() => {
    const fetchEmails = async () => {
      const emailCollection = collection(db, "emails_Newsletter");
      const emailSnapshot = await getDocs(emailCollection);
      const emailList = emailSnapshot.docs.map((doc) => ({
        id: doc.id,
        email: doc.data().email,
      }));
      setEmails(emailList);
    };

    fetchEmails();
  }, []);

  const copyEmails = () => {
    const emailAddresses = emails.map((email) => email.email).join(", ");
    navigator.clipboard.writeText(emailAddresses).then(() => {
      ToastiSuccess("Correos copiados exitosamente.");
    });
  };

  const logoutBotton = async () => {
    try {
      await logout();
    } catch (error) {
      console.log("error al intentar cerrar sesion componente: " + error);
    }
  };

  return (
    <div style={{ maxWidth: 500 }}>
      <Grid2 padding={15}>
        <Button onClick={logoutBotton} variant="contained" color="primary">
          Cerrar sesión
        </Button>
      </Grid2>
      <Typography variant="h4" gutterBottom>
        Emails
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Email Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {emails.map((email) => (
              <TableRow key={email.id}>
                <TableCell>{email.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        color="primary"
        onClick={copyEmails}
        style={{ marginTop: 16 }}
      >
        Copiar Todos los correos
      </Button>
    </div>
  );
};

export default EmailsComponent;
