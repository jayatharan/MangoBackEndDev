const propertiesData = [
    {
      name: 'Mango Sun Villa 1',
      property: 'Mango Sun',
      location: {
        addr_line_1: '123 Main St',
        addr_line_2: 'Apt 4B',
        city: 'Miami',
        postal_code: '12345',
        country: 'USA'
      },
      imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      amenity: {
        has_sea_view: true,
        has_lake_view: false,
        has_mountain_view: true,
        has_bathtub: true,
        has_balcony: true,
        floor_area: 750,
        has_wifi: true
      },
      occupancy: 'Single',
      rates: {
        bedAndBreakfast: 15,
        halfBoard: 24,
        fullBoard: 30
      }
    },
    {
      name: 'Mango Sun Villa 2',
      property: 'Mango Sun',
      location: {
        addr_line_1: '123 Main St',
        addr_line_2: 'Apt 4B',
        city: 'Miami',
        postal_code: '12345',
        country: 'USA'
      },
      imageUrl: 'https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      amenity: {
        has_sea_view: true,
        has_lake_view: false,
        has_mountain_view: true,
        has_bathtub: true,
        has_balcony: true,
        floor_area: 1000,
        has_wifi: true
      },
      occupancy: 'Double',
      rates: {
        bedAndBreakfast: 22,
        halfBoard: 34,
        fullBoard: 38
      }
    },
    {
      name: 'Mango Sun Villa 3',
      property: 'Mango Sun',
      location: {
        addr_line_1: '123 Main St',
        addr_line_2: 'Apt 4B',
        city: 'Miami',
        postal_code: '12345',
        country: 'USA'
      },
      imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      amenity: {
        has_sea_view: true,
        has_lake_view: false,
        has_mountain_view: true,
        has_bathtub: true,
        has_balcony: true,
        floor_area: 1750,
        has_wifi: true
      },
      occupancy: 'Triple',
      rates: {
        bedAndBreakfast: 27,
        halfBoard: 39,
        fullBoard: 45
      }
    },
    {
      name: 'Mango Sea Resort 1',
      property: 'Mango Sea',
      location: {
        addr_line_1: '456 Ocean Blvd',
        city: 'Bali',
        postal_code: '67890',
        country: 'Indonesia'
      },
      imageUrl: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      amenity: {
        has_sea_view: true,
        has_lake_view: false,
        has_mountain_view: false,
        has_bathtub: false,
        has_balcony: true,
        floor_area: 1000,
        has_wifi: true
      },
      occupancy: 'Single',
      rates: {
        bedAndBreakfast: 15,
        halfBoard: 24,
        fullBoard: 30
      }
    },
    {
      name: 'Mango Sea Resort 2',
      property: 'Mango Sea',
      location: {
        addr_line_1: '456 Ocean Blvd',
        city: 'Bali',
        postal_code: '67890',
        country: 'Indonesia'
      },
      imageUrl: 'https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      amenity: {
        has_sea_view: true,
        has_lake_view: false,
        has_mountain_view: false,
        has_bathtub: false,
        has_balcony: true,
        floor_area: 1500,
        has_wifi: true
      },
      occupancy: 'Double',
      rates: {
        bedAndBreakfast: 22,
        halfBoard: 34,
        fullBoard: 38
      }
    },
    {
      name: 'Mango Sea Resort 3',
      property: 'Mango Sea',
      location: {
        addr_line_1: '456 Ocean Blvd',
        city: 'Bali',
        postal_code: '67890',
        country: 'Indonesia'
      },
      imageUrl: 'https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      amenity: {
        has_sea_view: true,
        has_lake_view: false,
        has_mountain_view: false,
        has_bathtub: false,
        has_balcony: true,
        floor_area: 2500,
        has_wifi: true
      },
      occupancy: 'Triple',
      rates: {
        bedAndBreakfast: 27,
        halfBoard: 39,
        fullBoard: 45
      }
    },
    {
      name: 'Mango Hills Lodge 1',
      property: 'Mango Hills',
      location: {
        addr_line_1: '789 Mountain View Dr',
        city: 'Aspen',
        postal_code: '24680',
        country: 'USA'
      },
      imageUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      amenity: {
        has_sea_view: false,
        has_lake_view: true,
        has_mountain_view: true,
        has_bathtub: true,
        has_balcony: false,
        floor_area: 750,
        has_wifi: true
      },
      occupancy: 'Single',
      rates: {
        bedAndBreakfast: 15,
        halfBoard: 24,
        fullBoard: 30
      }
    },
    {
      name: 'Mango Hills Lodge 2',
      property: 'Mango Hills',
      location: {
        addr_line_1: '789 Mountain View Dr',
        city: 'Aspen',
        postal_code: '24680',
        country: 'USA'
      },
      imageUrl: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1157&q=80',
      amenity: {
        has_sea_view: false,
        has_lake_view: true,
        has_mountain_view: true,
        has_bathtub: true,
        has_balcony: false,
        floor_area: 1000,
        has_wifi: true
      },
      occupancy: 'Double',
      rates: {
        bedAndBreakfast: 22,
        halfBoard: 34,
        fullBoard: 38
      }
    },
    {
      name: 'Mango Hills Lodge 3',
      property: 'Mango Hills',
      location: {
        addr_line_1: '789 Mountain View Dr',
        city: 'Aspen',
        postal_code: '24680',
        country: 'USA'
      },
      imageUrl: 'https://images.unsplash.com/photo-1533633310920-cc9bf1e7f9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      amenity: {
        has_sea_view: false,
        has_lake_view: true,
        has_mountain_view: true,
        has_bathtub: true,
        has_balcony: false,
        floor_area: 1500,
        has_wifi: true
      },
      occupancy: 'Triple',
      rates: {
        bedAndBreakfast: 27,
        halfBoard: 39,
        fullBoard: 45
      }
    }
  ]
  