describe('check CI server information', () => {
    it('should return process information', () => {
        console.log(process);
        console.log(os);

        expect(process).not.toBeNull();
        expect(os).not.toBeNull();
    });
})