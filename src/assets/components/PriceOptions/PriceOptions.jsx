import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const options = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": "$30/month",
            "features": [
                "Access to gym facilities",
                "Locker room access",
                "Cardio equipment",
                "Free weights",
                "24/7 access",
                "Fitness assessment"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": "$50/month",
            "features": [
                "All Basic Membership features",
                "Group fitness classes",
                "Personal trainer sessions (2/month)",
                "Sauna and steam room access",
                "Towel service",
                "Discounts on protein supplements"
            ]
        },
        {
            "id": 3,
            "name": "Family Membership",
            "price": "$80/month",
            "features": [
                "All Premium Membership features for up to 4 family members",
                "Childcare services during workouts",
                "Access to swimming pool",
                "Nutrition counseling (1 session/month)",
                "Family workout classes",
                "Family locker room"
            ]
        },
        {
            "id": 4,
            "name": "Student Membership",
            "price": "$25/month",
            "features": [
                "Access to gym facilities",
                "Locker room access",
                "Cardio equipment",
                "Free weights",
                "Valid student ID required",
                "Student discount on merchandise",
                "Access to study area"
            ]
        }
    ]


    return (
        <div>
            <h3 className="text-3xl">Best Prices in Town</h3>
            {
                options.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;