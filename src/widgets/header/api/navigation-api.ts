import axios from 'axios';
import { NavItem } from '../types';

const API_BASE = 'http://localhost:9000/header-navigation';

export async function fetchClientNavigation(): Promise<NavItem[]> {
    const response = await axios.get(API_BASE);
    return response.data;
}