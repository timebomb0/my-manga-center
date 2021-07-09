import { v4 as uuid } from 'uuid';
import db from './mongodb';

const client = db.collection('series');
