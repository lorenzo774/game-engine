import { Settings } from "../../settings.js";
import { Entity } from "../entity.js";

export class UIDebug {
    // Singleton
    private static i: UIDebug;
    public static get I() {
        if (!UIDebug.i) {
            UIDebug.i = new UIDebug();
        }
        return UIDebug.i;
    }

    private entityList: HTMLUListElement = document.querySelector("#ui-entity");
    private fpsLbl: HTMLElement = document.querySelector("#fps");
    private toggleDebugUI: HTMLButtonElement =
        document.querySelector("#toggle-debug-mode");

    constructor() {
        if (!this.toggleDebugUI) return;
        this.toggleDebugUI.addEventListener("click", (_) => {
            Settings.DEBUG_MODE = !Settings.DEBUG_MODE;
            this.toggleDebugUI.textContent = Settings.DEBUG_MODE ? "ON" : "OFF";
            this.toggleDebugUI.classList.toggle("on");
            this.toggleDebugUI.classList.toggle("off");
        });
    }

    public showDebugUI() {
        document.querySelector("#ui-debug").classList.remove("hide");
    }

    public run(entities: Entity[], fps: number) {
        this.fpsLbl.textContent = `FPS: ${fps}`;
        this.entityList.innerHTML = entities
            .map((entity) => `<li> - ${entity.name}</li>`)
            .join("");
    }
}