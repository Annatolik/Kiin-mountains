const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const port = 4444;

app.use(express.json());

app.post('/send-email', (req, res) => {
  const email = req.body.email;

  // Налаштування транспортера для відправки електронної пошти
var smtpConfig = {
    host: 'smtp.ukr.net',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'annatollik@ukr.net', // Встановіть свою електронну адресу Gmail
      pass: 'fUuSRrGG2JbVoCCj'
    }
};
var transporter = nodemailer.createTransport(smtpConfig);

  const mailOptions = {
    from: 'kiin <annatollik@ukr.net>', // Встановіть свою електронну адресу
    to: email,
    subject: 'Subscription completed!',
    text: 'Thank you for subscribing!\nFrom now on, you will receive news about new events. Follow the news so you don\'t miss anything!\nWith gratitude, kiin!'
  };

  // Відправка електронної пошти
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.error('Сталась помилка при надсиланні листа:', error);
      res.status(500).send('Сталась помилка при надсиланні листа.');
    } else {
      console.log('Лист надіслано:', info.response);
      res.sendStatus(200);
    }
  });
});

app.use(express.static(path.resolve(__dirname, 'frontend')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'main.html'))
})



const sql = require('mssql');

const config = {
  server: 'localhost\\SQLEXPRESS02',
  database: 'Kiin',
  user: 'Owner1',
  password: 'wcvRqODyEE6wSniX02/SKDH8+/xdeueN7o94hhgg09I=',
  options: {
    encrypt: true // використовуйте цей параметр, якщо підключаєтесь до Azure SQL Database
  }
};

// Функція для перевірки підключення до бази даних
async function checkDatabaseConnection() {
  try {
    await sql.connect(config);
    console.log('Connected to the database.');
    // Виконання додаткових операцій з базою даних
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  } finally {
    // Завершення підключення
    sql.close();
  }
}

// Виклик функції перевірки підключення до бази даних
checkDatabaseConnection();

// Приклад маршруту Express для збереження даних
app.post('/save-data', async (req, res) => {
  try {
    await sql.connect(config);

    // Отримати дані з тіла POST-запиту
    const { name, phone, email, adults, children, arrivalDate, departureDate } = req.body;

    // Виконати запит INSERT для вставки даних в базу даних
    const result = await sql.query(`
      INSERT INTO Clients (Name, Phone, Email) 
      VALUES ('${name}', '${phone}', '${email}')
      INSERT INTO Reservation (Adults, Children, ArrivalDate, DepartureDate)
      VALUES (${adults}, ${children}, '${arrivalDate}', '${departureDate}')
    `);

    console.log('Дані успішно збережено');
  } catch (err) {
    console.error(err);
    console.log('Помилка сервера');
  } finally {
    sql.close();
  }
});

async function saveEmailToDatabase(email) {
  try {
    await sql.connect(config);
    const query = `INSERT INTO Emails (Email) VALUES ('${email}')`;
    await sql.query(query);
    console.log('Email saved successfully.');
  } catch (error) {
    console.error('Error saving email:', error);
  } finally {
    sql.close();
  }
}

app.listen(port, () => {
  console.log(`Сервер запущено на порту ${port}`);
});