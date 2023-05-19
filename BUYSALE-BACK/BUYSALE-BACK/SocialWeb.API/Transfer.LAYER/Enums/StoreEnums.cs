namespace Transfer.LAYER.Enums
{
    public enum ProductEnums
    {
        Pending = 0,
        Active,
        Rejected
    }

    public enum Result
    {
        Ok = 0,
        BadRequest, 
        NotFound,
        Exists,
        Empty,
        Exception,
        NotRegisteredUser,
        RegistrationError
    }

    public enum PostType
    {
        FromMe = 0,
        FromFriend
    }

    public enum MediaType
    {
        Photo = 0,
        Video,
        Sound
    }

    public enum PlatformRoles
    {
        Admin = 0, 
        Buyer,
        Customer, 
        Saler,
        Service
    }
}
