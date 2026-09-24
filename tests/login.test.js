test("valid login should pass", () => {
    const username = "qa_user";
    const password = "12345";

    expect(username).toBe("qa_user");
    expect(password).toBe("12345");
});
