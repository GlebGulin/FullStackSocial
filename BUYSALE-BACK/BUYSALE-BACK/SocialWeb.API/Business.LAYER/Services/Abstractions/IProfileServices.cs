using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Transfer.LAYER;
using Transfer.LAYER.DTOs.Common;
using Transfer.LAYER.DTOs.Social;
using Transfer.LAYER.DTOs.Social.Commands;
using Transfer.LAYER.DTOs.Social.Results;

namespace Business.LAYER.Services.Abstractions
{
    public interface IProfileServices
    {
        Task<GetProfileResult> GetProfile(GetProfileCommand profile);
        Task<SetProfileResult> SetProfile(SetProfileCommand profile);
        Task<GetGalleryResult> GetMyGallery();
    }
}
