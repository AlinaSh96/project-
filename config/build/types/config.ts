export type BuildMode = 'production' | 'development';
 
export interface BuildPaths {
entry: string,
build: string,
html: string,
}

export interface BuildEnv {
mode: BuildMode,
port: number,
}

export interface BuildOptins {
    mode: BuildMode,
    paths: BuildPaths,
    isDev: boolean,
    port: number,
}