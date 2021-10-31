function createTalker(name: string) {
    let mantra = 'haha';
    return {
        talk(word: string) {
            console.log(`${name}: ${word}, ${mantra}`);
        },
        get mantra() {
            return mantra;
        },
        set mantra(m: string) {
            mantra = m;
        },
    };
}

let bob = createTalker('bob');
bob.talk('hi jucy');
console.log(bob.mantra);
bob.mantra = 'gun';
console.log(bob.mantra);
bob.talk('bye jucy');
