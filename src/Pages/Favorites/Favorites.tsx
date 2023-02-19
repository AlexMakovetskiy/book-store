import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSelectorTyped from "../../hooks/useSelectorTyped";

export const Favorites = () => {
    const navigator = useNavigate();
    const userData = useSelectorTyped((state) => state.userSlicer);

    useEffect(() => {
        if(!userData.isLogin) {
            navigator('/signin');
        }
    }, [navigator]);


    return (
        <div>Favorites</div>
    );
}