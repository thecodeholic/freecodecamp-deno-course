enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

function isAdmin(c: string) {
  if (c === "admin") {
    return true;
  }
  return false;
}

isAdmin("admn");
