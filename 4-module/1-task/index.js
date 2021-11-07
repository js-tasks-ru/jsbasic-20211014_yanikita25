function makeFriendsList(friends) {
  let list = document.createElement('ul');
    friends.forEach(function (friend) {
        let listItem = document.createElement('li');
        listItem.innerHTML = `${friend.firstName} ${friend.lastName}`;
        list.append(listItem);
    })
    return list;
}
