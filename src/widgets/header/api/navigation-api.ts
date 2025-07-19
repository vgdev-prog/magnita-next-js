import axios from 'axios';
import { ClientRoute } from '../types';

const API_BASE = 'http://localhost:9000/navigation';

export async function fetchClientNavigation(): Promise<ClientRoute[]> {
    const response = await axios.get(API_BASE);
    return response.data;
}