using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DL.Model
{
    public class MessageModel
    {
        public string SenderId       { get; set; }
        public string ReceiverId     { get; set; }
        public string MessageContent { get; set; }
        public bool   WasRead        { get; set; }
        public DateTime ReadTime     { get; set; }
        public DateTime WriteTime    { get; set; }
    }
}
