const network =
  'rinkeby'
  // 'homestead'
  ;

  module.exports = {
    timeswappersServerUrl: network === 'homestead'
      ? 'https://apis.timeswappers.com'
      : 'http://3.19.158.222:8010',
    categoryArray: [
      'Real Estate',
      'Vehicles',
      'Electronics & Appliances',
      'Mobiles',
      'Furniture',
      'Bikes',
    ],
    subCategoryArray: [
      ['For Sale:Houses & Appartments', 'For Rent:Houses & Appartments', 'Lands & Plots', 'Shops & Offices', 'PG & Guest Houses'],
      ['Cars', 'Commercial Vehicles','Spare parts','Other Vehicles'],
      ['TV-Video-Audio', 'Kitchen & Other Appliances', 'Computers & Laptops','Cameras & Lenses','Games & Entertainment'
      ,'Fridges','Computer Accessories','Hard Disks,Printers & Monitors','Acs','Hard Disks,Printers & Monitors'],
      ['Mobile Phones', 'Accessories', 'Tablets'],
      ['Sofa & Dining','Beds & Wardrobe','Home Decor & Garden','Kids Furniture','Other Household items'],
      ['Motorcycles', 'Scooter', 'Spare  Parts','Bicycles'],
    ],
}