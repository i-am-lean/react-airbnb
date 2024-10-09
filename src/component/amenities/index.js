import "./index.css";

import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";

import poolIcon from "./pool.svg";
import gymIcon from "./gym.svg";
import breakfastIcon from "./breakfast.svg";
import wifiIcon from "./wifi.svg";
import parkingIcon from "./parking.svg";
import petIcon from "./pet.svg";
import airportShuttleIcon from "./airport_shuttle.svg";
import conciergeServiceIcon from "./concierge_service.svg";
import roomServiceIcon from "./room_service.svg";
import childIcon from "./child.svg";


export default function Amenities({
    title, amenities
}) {
    return (
        <Box className="amenities" shadow>
            <Heading borderclassName="amenities__header" border>
                {title}
            </Heading>

            <List {...amenities} />
        </Box>
    );
}

function List({
    hasPool = false,
    hasGym = false,
    hasFreeBreakfast = false,
    hasFreeWiFi = false,
    hasParking = false,
    hasPetsAllowed = false,
    hasAirportShuttle = false,
    hasConciergeService = false,
    hasRoomService = false,
    hasChildFriendly = false,
}) {
    return (
        <ul className="amenities__list">
            {hasPool && (
                <ListItem imageSrc={poolIcon}>
                <span>Басейн</span>
                </ListItem>
            )}

            {hasGym && (
                <ListItem imageSrc={gymIcon}>
                <span>Спортивна зала</span>
                </ListItem>
            )}

            {hasFreeBreakfast && (
                <ListItem imageSrc={breakfastIcon}>
                <span>Безкоштовний сніданок</span>
                </ListItem>
            )}

            {hasFreeWiFi && (
                <ListItem imageSrc={wifiIcon}>
                <span>Безкоштовний Wi-Fi</span>
                </ListItem>
            )}

            {hasParking && (
                <ListItem imageSrc={parkingIcon}>
                <span>Безкоштовний вуличний паркінг</span>
                </ListItem>
            )}

            {hasPetsAllowed && (
                <ListItem imageSrc={petIcon}>
                <span>Дозволено розміщення з домашніми тваринами</span>
                </ListItem>
            )}

            {hasAirportShuttle && (
                <ListItem imageSrc={airportShuttleIcon
            }>
                <span>Трансфер до/з аеропорту</span>
                </ListItem>
            )}

            {hasConciergeService && (
                <ListItem imageSrc={conciergeServiceIcon
            }>
                <span>Консьєрж-сервіс</span>
                </ListItem>
            )}

            {hasRoomService && (
                <ListItem imageSrc={roomServiceIcon
            }>
                <span>Обслуговування номерів</span>
                </ListItem>
            )}

            {hasChildFriendly && (
                <ListItem imageSrc={childIcon
            }>
                <span>Підходить для дітей</span>
                </ListItem>
            )}
        </ul>
    );
}


