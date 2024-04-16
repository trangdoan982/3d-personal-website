const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true, // Use `true` for port 465, `false` for all other ports
	auth: {
		user: process.env.NODEMAILER_USER,
		pass: process.env.SMTP_PASSWORD,
	},
});

// async..await is not allowed in global scope, must use a wrapper
export default async function handler(req: any, res: any) {
	const { question, answer, email } = req.body;
	// send mail with defined transport object
	const info = await transporter.sendMail({
		from: process.env.NODEMAILER_USER,
		to: process.env.RECEIVER_EMAIL,
		subject: `You've got a new reach out from ${email}`, // Subject line
		text: `${question}: ${answer}`, // plain text body
		html: `<b> ${question}</b> <br/> ${answer}`, // html body
	});
	if (req.method === "POST") {
		res.status(200).json({
			message: "You've successfully made the first contact",
		});
	} else {
		res.status(405).json({ message: "method not allowed" });
	}
}
