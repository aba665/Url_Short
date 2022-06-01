import { getAll, newData } from "../models/data.js";
import { existHash, existOrigin } from '../controllers/searchController.js';

class DataController{
    async redirect(req, res){
        let { hash } = req.params
        let file = getAll();

        let result = existHash(file, hash);
        
        if(result){
            return res.redirect(`${result}`);
        }

        return res.send(404).json({msg: "Element don't exist!"});
    }
    async save(req, res){
        let originUrl = await req.body.url;
        let id = newHash();
        let shortUrl = `http://localhost:3000/${id}`;
        let file = getAll();
        
        if(originUrl){
            let result = existOrigin(file, originUrl);
            if(result){
                return res.status(400).json({msg:'Url já encurtada!'});
            }
            
            newData(id, originUrl, shortUrl);
            return res.status(200).json({url: 'Create short url'})
        }


    }

    async read(req, res){
        let dt = getAll();
        return res.status(200).json(dt)
    }
}


export default new DataController;