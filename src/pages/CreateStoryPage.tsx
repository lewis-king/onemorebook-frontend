import { createSignal } from "solid-js";

export default function CreateStoryPage() {
  const [formData, setFormData] = createSignal({
    mainCharacter: "",
    setting: "",
    theme: "",
    ageGroup: "2-5",
    mood: "happy"
  });

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log("Creating story with:", formData());
  };

  return (
    <div class="max-w-2xl mx-auto">
      <h1 class="text-4xl font-comic text-center text-kiddy-primary mb-8">
        Create Your Magical Story
      </h1>
      <form onSubmit={handleSubmit} class="space-y-6 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <label class="block text-gray-700 mb-2" for="mainCharacter">
            Who is your main character?
          </label>
          <input
            id="mainCharacter"
            type="text"
            class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-kiddy-primary"
            placeholder="A brave little mouse..."
            value={formData().mainCharacter}
            onInput={(e) => setFormData({ ...formData(), mainCharacter: e.currentTarget.value })}
          />
        </div>

        <div>
          <label class="block text-gray-700 mb-2" for="setting">
            Where does the story take place?
          </label>
          <input
            id="setting"
            type="text"
            class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-kiddy-primary"
            placeholder="In a magical forest..."
            value={formData().setting}
            onInput={(e) => setFormData({ ...formData(), setting: e.currentTarget.value })}
          />
        </div>

        <div>
          <label class="block text-gray-700 mb-2" for="theme">
            What's the story about?
          </label>
          <input
            id="theme"
            type="text"
            class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-kiddy-primary"
            placeholder="Learning to be brave..."
            value={formData().theme}
            onInput={(e) => setFormData({ ...formData(), theme: e.currentTarget.value })}
          />
        </div>

        <div>
          <label class="block text-gray-700 mb-2" for="ageGroup">
            Age Group
          </label>
          <select
            id="ageGroup"
            class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-kiddy-primary"
            value={formData().ageGroup}
            onChange={(e) => setFormData({ ...formData(), ageGroup: e.currentTarget.value })}
          >
            <option value="2-5">2-5 years</option>
            <option value="6-8">6-8 years</option>
            <option value="9-12">9-12 years</option>
          </select>
        </div>

        <div>
          <label class="block text-gray-700 mb-2" for="mood">
            Story Mood
          </label>
          <select
            id="mood"
            class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-kiddy-primary"
            value={formData().mood}
            onChange={(e) => setFormData({ ...formData(), mood: e.currentTarget.value })}
          >
            <option value="happy">Happy & Fun</option>
            <option value="adventure">Exciting Adventure</option>
            <option value="educational">Educational</option>
            <option value="bedtime">Calm Bedtime</option>
          </select>
        </div>

        <button type="submit" class="btn-primary w-full">
          Create My Story! 🌟
        </button>
      </form>
    </div>
  );
}