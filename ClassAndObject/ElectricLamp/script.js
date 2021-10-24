function ElectricLamp() {
    this.status = true;

    this.turnOn = () => {
        this.status = true;
    }

    this.turnOff = () => {
        this.status = false;
    }


}

function SwitchButton() {
    this.lamp = new ElectricLamp();

    this.connectToLamp = (obj) => {
        return obj;
    }
    this.switchOff = (obj) => {
        obj.turnOff();
    }
    this.switchOn = (obj) => {
        obj.turnOn();
    }
}

let switchButton = new SwitchButton();
const lightOff = document.getElementById('light-off');
const lightOn = document.getElementById('light-on');

const myonoffswitch = document.getElementById('myonoffswitch');
myonoffswitch.addEventListener('click', () => {
    console.log(myonoffswitch.checked);
    if (myonoffswitch.checked) {
        switchButton.switchOn(switchButton.lamp);
    }
    else {
        switchButton.switchOff(switchButton.lamp);
    }
    console.log(switchButton.lamp.status);

    if (switchButton.lamp.status) {
        lightOff.classList.add('display-none');
        lightOn.classList.remove('display-none');
    }
    else {
        lightOff.classList.remove('display-none');
        lightOn.classList.add('display-none');
    }
});

window.onload = () => {
    lightOff.classList.add('display-none');
}