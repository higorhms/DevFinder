import axios from 'axios';
import Dev from '../models/Dev';
import parseStringAsArray from '../utils/parseStringAsArray';
import { findConnections, sendMessage } from '../../websocket';

// show for a unic result of search
class DevController {
    async index(req, res) {
        const devs = await Dev.find();

        return res.json(devs);
    }

    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            const apiResponse = await axios.get(
                `https://api.github.com/users/${github_username}`
            );

            const { name = login, avatar_url, bio } = apiResponse.data;

            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });

            const sendSocketMessageTo = findConnections(
                {
                    latitude,
                    longitude,
                },
                techsArray
            );

            sendMessage(sendSocketMessageTo, 'new-dev', dev);
        }

        return res.json(dev);
    }
}

export default new DevController();
