function ProfileCard() {
  return (
    <div className="flex flex-col items-center ">
      <img
        className="rounded-full border border-gray-soft w-20 h-20 mb-2"
        src="https://randomuser.me/api/portraits/men/14.jpg"
      />
      <div className="text-center">Juan David Marin</div>
    </div>
  );
}

export { ProfileCard };
