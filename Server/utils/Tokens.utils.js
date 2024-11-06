const generateAccessAndRefreshToken= async(User)=>{
    try {
        const AccessToken= User.generateAccessToken();
        const RefreshToken= User.generateRefreshToken();
        return {AccessToken,RefreshToken};
    } catch (error) {
        return 'some internal error occured.'
    }
}

export default generateAccessAndRefreshToken;