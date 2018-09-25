describe('check CI server information', () => {
    it('should return process information', () => {
        expect(process).not.toBeNull();
    });
})