

import frontnavratri from"../assets/navratriimg/10-frontnavratri2.jpeg";
function BackgroundShapes() {
  return (
    <div className="fixed inset-0 -z-10">

      {/* 🖼️ Background Image */}
      <img
        src={frontnavratri}
        className="w-full h-full object-cover"
      />

      {/* 💜 Purple Overlay */}
      <div className="absolute inset-0 bg-purple-100/10"></div>

    </div>
  );
}

export default BackgroundShapes;