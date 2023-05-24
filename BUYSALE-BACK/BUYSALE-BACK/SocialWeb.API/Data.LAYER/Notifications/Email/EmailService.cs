using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MimeKit;
using System;
using System.Threading.Tasks;

namespace DL.Notifications.Email
{
    public class EmailService : IEmailService
    {
        private readonly SMPTEmail _smptEmail;
        private readonly ILogger<EmailService> _logger;
        public EmailService(ILogger<EmailService> logger, IOptions<SMPTEmail> smptEmail)
        {
            _logger = logger;
            _smptEmail = smptEmail.Value;
        }
        public async Task SendEmailCustomerRegistAsync(string email, string subject, string message)
        {
            try
            {
                _logger.LogInformation($"Sending registration email to customer {email}");
                using var emailMessage = new MimeMessage();

                emailMessage.From.Add(new MailboxAddress("BuySale Registration", "glepsgulin@gmail.com"));
                emailMessage.To.Add(new MailboxAddress("", email));
                emailMessage.Subject = subject;
                emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html)
                {
                    Text = message
                };

                using (var client = new SmtpClient())
                {
                    await client.ConnectAsync("smtp.gmail.com", 587, SecureSocketOptions.StartTls);
                    await client.AuthenticateAsync(_smptEmail.Login, _smptEmail.PasswordApps);
                    await client.SendAsync(emailMessage);
                    await client.DisconnectAsync(true);
                };
            }
            catch(Exception ex)
            {
                _logger.LogError($"Failed sending registration email to customer {email}. Cause: {ex.Message}");
            }
        }
    }
}
