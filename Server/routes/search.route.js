import {Router} from 'express';
import { searchUser } from '../controllers/search.controller.js';

const SearchRoute= Router();

SearchRoute.post('/',searchUser)

export default SearchRoute;