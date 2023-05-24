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
        MeAuthor = 0,
        AnotherAuthor
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
