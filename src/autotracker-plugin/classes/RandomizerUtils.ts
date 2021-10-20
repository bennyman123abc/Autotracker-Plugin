import { IModLoaderAPI } from "modloader64_api/IModLoaderAPI";

export class RandomizerUtils {
    contextPointer: number = 0x801C8464;
    ModLoader: IModLoaderAPI;

    constructor(ModLoader: IModLoaderAPI) {
        this.ModLoader = ModLoader;
    }

    isRomMultiworld() {
        return this.ModLoader.emulator.rdramRead32(this.contextPointer) > 0;
    }

    getMultiworld() {
        if (!this.isRomMultiworld()) return 0;
        return this.ModLoader.emulator.rdramRead8(this.ModLoader.emulator.rdramReadPtr32(this.contextPointer, 0x0) + 0x4);
    }
}