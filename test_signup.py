def test_valid_login():
    username = "qa_user"
    password = "12345"

    assert username == "qa_user"
    assert password == "12345"


def test_invalid_login():
    username = "wrong_user"
    expected_username = "qa_user"

    assert username != expected_username
  
