declare module "klaro" {
    interface KlaroConfig {
        [key: string]: unknown;
    }
    export function setup(config: KlaroConfig): void;
    export function show(config?: unknown, modal?: boolean): void;
}

export { };
