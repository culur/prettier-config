describe('.prettierrc.js', () => {
    it('should be valid config', async () => {
        expect.assertions(0);

        await require('prettier').resolveConfig('./.prettierrc.js', {
            editorconfig: true,
        });
    });
});
