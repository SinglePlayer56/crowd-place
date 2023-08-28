const clientEnv: IClientEnv = {
    localServer: 'http://localhost:3001',
    prodServer: 'https://crowd-place.com'
}

export interface IClientEnv {
    localServer: string;
    prodServer: string;
}

export default clientEnv;
