import { useSQLiteContext } from 'expo-sqlite';

export default function useTasksDatabase() {
  const database = useSQLiteContext();

  async function create(task) {
    const sql = "INSERT INTO tasks (title, description) VALUES ($title, $description)";
    const statement = await database.prepareAsync(sql);

    try {
      await statement.executeAsync({
        $title: task.title,
        $description: task.description
      });
    } catch (error) {
      console.log(error);
    } finally {
      await statement.finalizeAsync();
    }
  }

  async function update(task) {
    const sql = "UPDATE tasks SET title = $title, description = $description WHERE id = $id";
    const statement = await database.prepareAsync(sql);

    try {
      await statement.executeAsync({
        $title: task.title,
        $description: task.description,
        $id: task.id
      });
    } catch (error) {
      console.log(error);
    } finally {
      await statement.finalizeAsync();
    }
  }

  async function show() {
    try {
      const sql = "SELECT * FROM tasks ORDER BY create_date desc";
      return await database.getAllAsync(sql);
    } catch (error) {
      console.log(error);
    }
  }

  async function remove(id) {
    try {
      const sql = `DELETE FROM tasks WHERE id = ${id}`;
      await database.execAsync(sql);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateStatus(id) {
    try {
      const sql = `UPDATE tasks SET done = not done WHERE id = ${id}`;
      await database.execAsync(sql);
    } catch (error) {
      console.log(error);
    }
  }


  return { create, show, update, remove, updateStatus };
}