using System.Threading.Tasks;

namespace DL.Notifications.Email
{
    public interface IEmailService
    {
        Task SendEmailCustomerRegistAsync(string email, string subject, string message);
    }
}
