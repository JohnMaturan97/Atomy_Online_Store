const INITIAL_STATE = {
    sections: [
      {
      title: "Beauty",
      subtitle: "Define Beauty. Define You.",
      imageUrl:"https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      id: 1,
      linkUrl: "shop/beauty",
    },
    {
      title: "Living",
      subtitle: "All you need is Change",
      imageUrl: "https://images.unsplash.com/photo-1571992579655-8134e2b8df0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      id: 2,
      linkUrl: "shop/living",
    },
    {
      title: "Food",
      subtitle: "You are what you eat",
      imageUrl: "https://images.unsplash.com/photo-1474859569645-e0def92b02bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      id: 3,
      linkUrl: "shop/food",
    },
    {
      title: "Personal Care",
      subtitle: "Get the glow",
      imageUrl: "https://images.unsplash.com/photo-1577467013350-7c22a844e1a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1442&q=80",
      size: "large",
      id: 4,
      linkUrl: "shop/personalcare",
    },
    {
      title: "Health Care",
      subtitle: "Health is the real wealth",
      imageUrl: "https://images.unsplash.com/photo-1597817109745-c418f4875230?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      size: "large",
      id: 5,
      linkUrl: "shop/healthcare",
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;