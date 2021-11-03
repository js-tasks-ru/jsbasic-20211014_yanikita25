function showSalary(users, age) {
  let result = [];
  users.forEach(function (user) {
    if (user.age <= age) {
      result.push(`${user.name}, ${user.balance}`);
    }
  })
  return result.join("\n");
}
