using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Transfer.LAYER;
using Transfer.LAYER.DTOs.Common;
using Transfer.LAYER.DTOs.Social;

namespace Business.LAYER.Services.Abstractions
{
    public interface IProfileServices
    {
        Task<ProfileDTO> GetProfile();
        Task<ProfileDTO> SetProfile(ProfileDTO profile);
        Task<GalleryDTO> GetMyGallery();
    }
}
