const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// Caminho para o arquivo de log
const logPath = path.resolve(__dirname, '../../pipeline_log.txt');

// Verifica se o arquivo de log existe
if (!fs.existsSync(logPath)) {
  console.error('Log file not found');
  process.exit(1);
}

// Configure o transporte de e-mail
let transporter = nodemailer.createTransport({
  service: 'gmail', // ou qualquer outro serviço de e-mail
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Configure as opções de e-mail
// Configure as opções de e-mail
let mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'brunonnalves@edu.unifor.br, sconstantino@edu.unifor.br', // Lista de e-mails separados por vírgula
  subject: 'Pipeline Failed',
  text: 'A pipeline falhou. Por favor, verifique o logs no GitHub Actions para mais detalhes.',
  attachments: [
    {
      filename: 'pipeline_log.txt',
      path: logPath,
    },
  ],
};

// Envie o e-mail
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});
