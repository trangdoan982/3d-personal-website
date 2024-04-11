const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true, // Use `true` for port 465, `false` for all other ports
	auth: {
		user: "trang3dwebsite@gmail.com",
		pass: "iszy goot enrh jdfo",
	},
});

// async..await is not allowed in global scope, must use a wrapper
export default async function handler(req: any, res: any) {
	const { question, answer, email } = req.body;
	// send mail with defined transport object
	const info = await transporter.sendMail({
		from: "trang3dwebsite@gmail.com", // sender address
		to: "doanthithuytrang982@gmail.com", // list of receivers
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
