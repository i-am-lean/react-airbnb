import "./index.css";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";
import { Fragment } from "react";

export default function Attractions({ title, attractions }) {
    return (
         <Box className="attractions__block">
            <Heading>
                {title}
            </Heading>

            <div className="attractions__list">
                {attractions.map(({ id, ...rest }) => (
                    <Fragment key={id}>
                        <List {...rest} />
                    </Fragment>
                    ))}
            </div>
        </Box>
    );
}

function List({ name, link }) {
    return (
        <ul className="attractions__item">
            <ListItem>
                <a href={link}>{name}</a>
            </ListItem>
        </ul>
    );
}
