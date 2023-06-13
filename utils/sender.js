const nodemailer = require('nodemailer')

const sender = (params) => {
	return new Promise((resolve, reject) => {
		let transporter = nodemailer.createTransport({
			transport: 'SMTP',
			host: 'smtp.qq.com',
			port: 465,
			secure: true,
			auth: {
				user: 'yaochaohang@foxmail.com', // 替换成自己的发件人
				pass: 'cxekrdbgtxsmcidf' // 替换成自己的授权码
			}
		});

		let mailOptions = {
			from: 'yaochaohang@foxmail.com', // 替换成自己的发件人
			to: 'chaohang_yao@126.com', // 替换成自己的收件人
			subject: '测试邮件发送',
			html: `姓名：${params.name || ''}
						邮箱：${params.email || ''}
						内容：${params.message || ''}`
		};

		transporter.sendMail(mailOptions, (error, info) => {
			try {
				transporter.close()
			} catch (e) {
			}

			if (error) {
				resolve({
					status: 'failure',
					message: '邮件发送失败'
				})
				return console.log(error);
			}

			resolve({
				status: 'success',
				message: '邮件发送成功'
			})
		});
	})
}

module.exports = sender