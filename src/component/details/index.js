import "./index.css";

import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";

import guestsIcon from "./guests.svg";
import bedroomsIcon from "./bedroom.svg";
import bedsIcon from "./bed.svg";
import bathIcon from "./bath.svg";


export default function PropertyDetails({
    guests,
    bedrooms,
    beds,
    baths
}) {
    return (
        <Box className="details" shadow>
            <Heading borderclassName="details__header" border>
                Деталі властивості:
            </Heading>
            
            <ul className="details__list">
                <ListItem imageSrc={guestsIcon}>
                    <span>{guests}</span>
                    <span>гостей</span>
                </ListItem>

                <ListItem imageSrc={bedroomsIcon}>
                    <span>{bedrooms}</span>
                    <span>спальня</span>
                </ListItem>

                <ListItem imageSrc={bedsIcon}>
                    <span>{beds}</span>
                    <span>ліжко</span>
                </ListItem>

                <ListItem imageSrc={bathIcon}>
                    <span>{baths}</span>
                    <span>ванна</span>
                </ListItem>
            </ul>
        </Box>
    );
}


