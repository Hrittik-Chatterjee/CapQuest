const FavoriteLeagues = () => {
  // Example data for icons and labels
  const leagues = [
    {
      name: "MLB",
      imgUrl:
        "https://www.lids.com/content/ws/all/ba566f1f-a540-4a3b-a0e5-e4fda6b8df03.svg",
    },
    {
      name: "NFL",
      imgUrl:
        "https://www.lids.com/content/ws/all/9781ec61-f888-4ec8-8bbc-20a93293acff.svg",
    },
    {
      name: "NHL",
      imgUrl:
        "https://www.lids.com/content/ws/all/7441a49a-73ad-40ae-bff5-ff690c6655c2.svg",
    },
    {
      name: "NBA",
      imgUrl:
        "https://www.lids.com/content/ws/all/6dfd4b4f-1e6a-42a4-bf4d-a579ff71a1f1.svg",
    },
    {
      name: "Football",
      imgUrl:
        "https://www.lids.com/content/ws/all/3601fb15-da57-4363-9ebd-3eefa14308be.svg",
    },
  ];

  return (
    <div className="bg-white py-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Shop Your Favorite League
        </h2>
      </div>

      <div className="flex justify-center space-x-8">
        {leagues.map((league) => (
          <div key={league.name} className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-2">
              <img
                src={league.imgUrl}
                alt={league.name}
                className="w-10 h-10"
              />
            </div>
            <p className="text-sm font-medium text-gray-700">{league.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteLeagues;
